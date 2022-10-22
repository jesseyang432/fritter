import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import UserCollection from '../user/collection';
import CommunityCollection from '../community/collection';

/**
 * Checks if a req.query.community is not valid community name or req.query.username is not valid username
 */
const isInvalidQuery = async (req: Request, res: Response, next: NextFunction) => {
  const community = await CommunityCollection.findOneByName(req.query.community as string);
  const user = await UserCollection.findOneByUsername(req.query.username as string);
  if (!community) {
    res.status(404).json({
      error: 'Community not found.'
    });
    return;
  } else if (!user) {
    res.status(404).json({
      error: 'User not found.'
    });
    return;
  }

  next();
}
export {
  isInvalidQuery
};
