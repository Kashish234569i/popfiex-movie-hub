import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Review {
  id: string;
  user_id: string;
  movie_id: string;
  rating: number;
  title: string;
  content: string;
  is_featured: boolean;
  created_at: string;
  profiles?: {
    first_name: string;
    last_name: string;
  };
  movies?: {
    title: string;
    poster_url: string;
  };
}

export function useReviews(movieId?: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchReviews();
  }, [movieId]);

  const fetchReviews = async () => {
    try {
      let query = supabase
        .from('reviews')
        .select(`
          *,
          profiles (first_name, last_name),
          movies (title, poster_url)
        `)
        .order('created_at', { ascending: false });

      if (movieId) {
        query = query.eq('movie_id', movieId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setReviews(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  const createReview = async (movieId: string, rating: number, title: string, content: string) => {
    if (!user) throw new Error('User must be logged in to create a review');

    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert({
          user_id: user.id,
          movie_id: movieId,
          rating,
          title,
          content,
        })
        .select()
        .single();

      if (error) throw error;
      await fetchReviews();
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'Failed to create review' };
    }
  };

  const updateReview = async (reviewId: string, rating: number, title: string, content: string) => {
    if (!user) throw new Error('User must be logged in to update a review');

    try {
      const { data, error } = await supabase
        .from('reviews')
        .update({ rating, title, content })
        .eq('id', reviewId)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;
      await fetchReviews();
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'Failed to update review' };
    }
  };

  const deleteReview = async (reviewId: string) => {
    if (!user) throw new Error('User must be logged in to delete a review');

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId)
        .eq('user_id', user.id);

      if (error) throw error;
      await fetchReviews();
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Failed to delete review' };
    }
  };

  return { 
    reviews, 
    loading, 
    error, 
    refetch: fetchReviews,
    createReview,
    updateReview,
    deleteReview
  };
}