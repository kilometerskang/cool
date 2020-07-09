const Lti = require('ltijs').Provider

const path = require('path')
require('dotenv').config()

// Setup
const lti = new Lti(process.env.LTI_KEY,
  {
    url: 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME /* + '?authSource=admin', */
  });

// When receiving successful LTI launch redirects to app
lti.onConnect((connection, request, response) => {
  lti.redirect(response, 'http://localhost:3000');
});

// When receiving deep linking request redirects to deep link React screen
lti.onDeepLinking(async (connection, request, response) => {
  return lti.redirect(response, '/deeplink', { isNewResource: true })
})

// Grading route
lti.app.post('/grade', async (req, res) => {
  try {
    const lineItem = {
      scoreMaximum: 9,
      label: 'Grade',
      tag: 'grade'
    }

    const grade = {
      scoreGiven: req.body.grade,
      activityProgress: 'Completed',
      gradingProgress: 'FullyGraded'
    }
    await lti.Grade.scorePublish(res.locals.token, grade, { resourceLinkId: true, autoCreate: lineItem })
    return res.sendStatus(201)
  } catch (err) {
    console.log(err.message)
    return res.status(500).send(err.message)
  }
})

// Names and Roles route
lti.app.get('/members', async (req, res) => {
  try {
    const result = await lti.NamesAndRoles.getMembers(res.locals.token)
    if (result) return res.send(result.members)
    return res.sendStatus(500)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err.message)
  }
})

// Deep linking route
lti.app.post('/deeplink', async (req, res) => {
  try {
    const resource = req.body

    const items = {
      type: 'ltiResourceLink',
      title: 'Ltijs Demo',
      custom: {
        name: resource.name,
        value: resource.value
      }
    }

    const form = await lti.DeepLinking.createDeepLinkingForm(res.locals.token, items, { message: 'Successfully Registered' })
    if (form) return res.send(form)
    return res.sendStatus(500)
  } catch (err) {
    console.log(err.message)
    return res.status(500).send(err.message)
  }
})

// Available resources for deep linking route
lti.app.get('/resources', async (req, res) => {
  const resources = [
    {
      name: 'parameter1',
      value: 'value1'
    },
    {
      name: 'parameter2',
      value: 'value2'
    },
    {
      name: 'parameter3',
      value: 'value3'
    }
  ]
  return res.send(resources)
})

// Get user and context information route
lti.app.get('/info', async (req, res) => {
  const token = res.locals.token
  const context = res.locals.context

  const info = { }
  if (token.userInfo) {
    if (token.userInfo.name) info.name = token.userInfo.name
    if (token.userInfo.email) info.email = token.userInfo.email
  }

  if (token.roles) info.roles = token.roles
  if (context.context) info.context = context.context

  return res.send(info)
})

// Setup function
const setup = async () => {
  await lti.deploy({ port: process.env.SRV_PORT || 3001 })

  /**
   * Register platform
   */
  await lti.registerPlatform({
    url: 'http://localhost:8000',
    name: 'Local Moodle',
    clientId: 'koEmpoccZRyCyyP',
    authenticationEndpoint: 'http://localhost:8000/mod/lti/auth.php',
    accesstokenEndpoint: 'http://localhost:8000/mod/lti/token.php',
    authConfig: { method: 'JWK_SET', key: 'http://localhost:8000/mod/lti/certs.php' }
  })
}

setup()
