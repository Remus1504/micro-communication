import { message } from '../Controllers/createMessage';
import {
  conversation,
  conversationList,
  messages,
  userMessages,
} from '../Controllers/getMessage';
import {
  markMultipleMessages,
  markSingleMessage,
  offer,
} from '../Controllers/updateMessage';
import express, { Router } from 'express';

const router: Router = express.Router();

const messageRoutes = (): Router => {
  router.get('/conversation/:senderUsername/:receiverUsername', conversation);
  router.get('/conversations/:username', conversationList);
  router.get('/:senderUsername/:receiverUsername', messages);
  router.get('/:conversationId', userMessages);
  router.post('/', message);
  router.put('/offer', offer);
  router.put('/mark-as-read', markSingleMessage);
  router.put('/mark-multiple-as-read', markMultipleMessages);

  return router;
};

export { messageRoutes };
