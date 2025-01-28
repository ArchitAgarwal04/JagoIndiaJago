import express from 'express';
import { getUserSearchHistory } from '../../services/searchHistoryService.js';

const router = express.Router();

router.get('/search-history', async (req, res) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const history = await getUserSearchHistory(userId);
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch search history' });
  }
});

export default router;