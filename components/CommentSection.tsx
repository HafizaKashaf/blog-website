"use client";
import React, { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  message: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddComment = () => {
    if (name.trim() && message.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        name,
        message,
      };

      setComments([...comments, newComment]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md shadow-black">
      <h2 className="text-2xl text-gray-900 font-bold mb-4">Comments</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2 bg-transparent outline-none "
        />
        <textarea
          placeholder="Your Comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded mb-2 bg-transparent outline-none"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Add Comment
        </button>
      </div>

      <div className="mt-4">
        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-4 p-4 border border-gray-300 rounded bg-white shadow-sm"
          >
            <strong className="block text-lg font-semibold text-black ">{comment.name}</strong>
            <p className="text-blue-950">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
