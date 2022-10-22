import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import * as userValidator from '../user/middleware';
import * as freetValidator from '../freet/middleware';
import * as upvoteValidator from '../upvote/middleware';
import * as util from './util';
import ReputationCollection from './collection';

const router = express.Router();

/**
 * Get reputation of a user within a community
 *
 * @name GET /api/reputation?community=NAME&username=USERNAME
 *
 * @return {ReputationResponse} - Reputation object
 * @throws {404} - If the community is invalid
 * @throws {404} - If the username is invalid
 */
 router.get(
  '/',
  [
    // TODO: Add Middleware
  ],
  async (req: Request, res: Response) => {
    const reputation = await ReputationCollection.findOneByNames(req.query.community as string, req.query.username as string);
    const response = util.constructReputationResponse(reputation);
    res.status(200).json(response);
  }
);

export {router as reputationRouter};
