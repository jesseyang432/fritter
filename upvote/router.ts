import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import FreetCollection from './collection';
import * as userValidator from '../user/middleware';
import * as freetValidator from '../freet/middleware';
import * as communityValidator from '../community/middleware';
import * as util from './util';

const router = express.Router();


/**
 * Create a new upvote.
 *
 * @name POST /api/upvotes/:freetId
 *
 * @param {string} freetId - The ID of the freet to upvote
 * @return {UpvoteResponse} - The created freet
 * @throws {403} - If the user is not logged in
 * @throws {400} - If the freetId is invalid
 * @throws {400} - If the user has already upvoted the freet
 */
router.post(
  '/',
  [
    userValidator.isUserLoggedIn,
    freetValidator.isFreetExists,
    // TODO: Middleware for if already upvoted
  ],
  async (req: Request, res: Response) => {
    // const userId = (req.session.userId as string) ?? ''; // Will not be an empty string since its validated in isUserLoggedIn
    // const freet = await FreetCollection.addOne(userId, req.body.content, req.body.community, req.body.parentId);

    // res.status(201).json({
    //   message: 'Your freet was created successfully.',
    //   freet: util.constructFreetResponse(freet)
    // });
  }
);

/**
 * Get upvotes on a freet.
 *
 * @name GET /api/upvotes/:freetId
 *
 * @param {string} freetId - The ID of the freet to upvote
 * @return {UpvoteResponse} - The created freet
 * @throws {404} - If the freetId is invalid
 */
 router.get(
  '/',
  [
    freetValidator.isFreetExists,
  ],
  async (req: Request, res: Response) => {
    // const userId = (req.session.userId as string) ?? ''; // Will not be an empty string since its validated in isUserLoggedIn
    // const freet = await FreetCollection.addOne(userId, req.body.content, req.body.community, req.body.parentId);

    // res.status(201).json({
    //   message: 'Your freet was created successfully.',
    //   freet: util.constructFreetResponse(freet)
    // });
  }
);


export {router as upvoteRouter};
