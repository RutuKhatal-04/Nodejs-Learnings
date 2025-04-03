import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    res.json({ title: response.data.title });
  } catch (error) {
    console.log(error);
  }
});

router.get("/data", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: { id: req.query.id }
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/data", async (req, res) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: 'Our title',
      body: "This is test body",
      userId: 1
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.put("/data/:id", async (req, res) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
      title: 'Our title',
      body: "This is test body",
      userId: 1
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/data/:id", async (req, res) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.send("Data deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

router.get("/headers", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      headers: { 'Content-type': 'application/json' }
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/headers", async (req, res) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: " ",
      body: " ",
      userId: 1,
      withCredentials: false,
      auth: {
        username: "",
        password: ""
      }
    }, {
      headers: { 'Content-type': 'application/json' }
    });
    res.send("Posted data with header");
  } catch (error) {
    console.log(error);
  }
});

router.get("/concurrent", async (req, res) => {
  try {
    const promise1 = axios.get("https://jsonplaceholder.typicode.com/users/1", { headers: { 'Accept-Encoding': 'gzip,compress,deflate' } });
    const promise2 = axios.get("https://jsonplaceholder.typicode.com/todos/1", { headers: { 'Accept-Encoding': 'gzip,compress,deflate' } });
    const promise3 = axios.get("https://jsonplaceholder.typicode.com/posts/1", { headers: { 'Accept-Encoding': 'gzip,compress,deflate' } });

    const [response1, response2, response3] = await Promise.all([promise1, promise2, promise3]);

    const combinedData = {
      postsData: response1.data,
      usersData: response2.data,
      todosData: response3.data
    };

    console.log(combinedData);
    res.send("Concurrent request completed");
  } catch (error) {
    console.log(error);
  }
});

export default router;