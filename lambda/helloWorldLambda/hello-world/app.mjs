/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

// export const lambdaHandler = async (event, context) => {
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify({
//         eventBody:event,
//         message: 'hello world 12345678',
//       })
//     };

//     return response;
//   };
  
let storedMessage = '';

export const lambdaHandler = async (event, context) => {
  console.log('Received event:', JSON.stringify(event));

  try {
    switch (event.httpMethod) {
      case 'POST':
        return handlePostRequest(event);
      case 'GET':
        return handleGetRequest(event);
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ message: "Method not allowed" }),
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error", error: error.message }),
    };
  }
};

const handlePostRequest = (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request: body is required" }),
    };
  }

  const requestBody = JSON.parse(event.body);
  const message = requestBody.message;
  

  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid request: message is required" }),
    };
  }

  storedMessage = message;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Message stored successfully",storedMessage }),
  };
};

const handleGetRequest = () => {
  if (!storedMessage) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "No message found" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: storedMessage }),
  };
};