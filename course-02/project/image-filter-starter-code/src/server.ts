import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { is } from 'bluebird';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  //Import is-image-URL package
  // const isImageURL = require('is-image-URL');

  //Import valid URL package
  var validURL = require('valid-url');
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  // //old get request
  // app.get("/filteredimage/", 
  // async (req , res) => {

    //get request suggested by Reviewer
  app.get( "/filteredimage/", async (req:express.Request, res:express.Response) => {
    let {image_url} = req.query;

    //Check if image_url is empty
    if (!image_url){
      //console.log('URL not provided');
      return res.status(400).send('Empty URL, please provide a valid URL');
    } 

    try {
      // console.log(image_url);
      //send image to filtering function
      const filteredPath = await filterImageFromURL(image_url);
     
      // console.log("image filtered")

      //clean up locally saved filtered image
      res.sendFile(filteredPath, () =>
      {deleteLocalFiles([filteredPath]);});
      // deleteLocalFiles([filteredPath])
    } 
    catch (e) {
      res.status(404).send("URL not found, please provide a valid URL");
      // console.log ("")
    }

    // console.log('Valid URL entered');


  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("Welcome to the Udagram image filter home endpoint")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();