import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import CommunityCollection from '../community/collection';

/**
 * Checks if a name in req.body is already in use
 */
 const isNameNotAlreadyInUse = async (req: Request, res: Response, next: NextFunction) => {
  const community = await CommunityCollection.findOneByName(req.body.name);

  if (!community) {
    next();
    return;
  }

  res.status(409).json({
    error: {
      name: 'A community with this name already exists.'
    }
  });
};

/**
 * Checks if a community exists based on communityId provided in req.params
 */
 const isCommunityExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const community = await CommunityCollection.findOneByCommunityId(req.params.communityId);

    if (community) {
      next();
    } else {
      res.status(404).json({error: 'Community not found.'});
    }
  } catch (error) {
    res.status(404).json({error: 'Community not found.'});
  }
};

/**
 * Checks if the current user is in the community whose communityId is in req.params
 */
const isUserInCommunity = async (req: Request, res: Response, next: NextFunction) => {
  const community = await CommunityCollection.findOneByCommunityId(req.params.communityId);
  const userId = req.session.userId;
  if (community.members.some((member) => (member._id.toString() === userId))) {
    res.status(400).json({
      error: 'Cannot join community you are already in.'
    });
    return;
  }

  next();
};

/**
 * Checks if the current user is not in the community whose communityId is in req.params
 */
 const isUserNotInCommunity = async (req: Request, res: Response, next: NextFunction) => {
  const community = await CommunityCollection.findOneByCommunityId(req.params.communityId);
  const userId = req.session.userId;
  if (!community.members.some((member) => (member._id.toString() === userId))) {
    res.status(400).json({
      error: 'Cannot leave community you are not in.'
    });
    return;
  }

  next();
};

export {
  isNameNotAlreadyInUse,
  isCommunityExists,
  isUserInCommunity,
  isUserNotInCommunity,
};
