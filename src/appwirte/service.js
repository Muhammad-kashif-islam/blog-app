import { Client, Databases, ID, Query, Storage } from "appwrite";
import confg from "../confg/conf";

const configraions = {
  endpoint: confg.appWriteUrl,
  projectId: confg.appWriteProjectId,
  databaseId: confg.appWriteDatabaseId,
  collectionId: confg.appWriteCollectionId,
  bucketId: confg.appWriteBucketId,
};
export class Service {
  client = new Client();
  database;
  bucket;

  //constructor weill make client on making the instance of class,
  constructor() {
    this.client
      .setEndpoint(configraions.endpoint)
      .setProject(configraions.projectId);

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //create post
  async createPost({ title, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        configraions.databaseId,
        configraions.collectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (e) {
      console.log("error in creating post", e);
    }
  }

  // update post
  async updatePost(post_id, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        configraions.databaseId,
        configraions.collectionId,
        post_id,
        { title: title, content: content, featuredImage, status }
      );
    } catch (error) {
      console.log("error in updating post", error);
    }
  }

  //delete post
  async deletePost(post_id) {
    try {
      await this.database.deleteDocument(
        configraions.databaseId,
        configraions.collectionId,
        post_id
      );
      return true;
    } catch (error) {
      console.log("error in deleting post", error);
      return false;
    }
  }

  //get single post
  async getPost(post_id) {
    try {
      return await this.database.getDocument(
        configraions.databaseId,
        configraions.collectionId,
        post_id
      );
    } catch (error) {
      console.log("error in getting post", error);
      return false;
    }
  }

  // get all posts
  async getAllPosts() {
    try {
      return await this.database.listDocuments(
        configraions.databaseId,
        configraions.collectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("error in getting posts", error);
      return false;
    }
  }

  //upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        configraions.bucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("error uploading file", error);
      return false;
    }
  }

  //delete file
  async deleteFile(file_id) {
    try {
      await this.bucket.deleteFile(configraions.bucketId, file_id);
      return true;
    } catch (error) {
      console.log("error deleting file", error);
      return false;
    }
  }

  //file preview
  async previewFile(file_id) {
    return this.bucket.getFilePreview(configraions.bucketId, file_id);
  }
}

const service = new Service();
export default service;
