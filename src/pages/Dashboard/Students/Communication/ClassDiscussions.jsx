import React, { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const ClassDiscussions = () => {
  const [threads, setThreads] = useState([
    {
      topic: "Math Forum (Thread: Quadratic Equations Help)",
      messages: [
        {
          sender: "Student 1",
          text: "Can anyone explain the quadratic formula?",
        },
        { sender: "Student 2", text: "It's -b ± √(b² - 4ac) / 2a" },
        {
          sender: "Teacher (Ms. Roberts)",
          text: "Let me provide a detailed explanation with examples.",
        },
      ],
      id: 1,
      date: "2024-12-12",
    },
    {
      topic: "Science Forum (Thread: Upcoming Science Fair)",
      messages: [
        {
          sender: "Student 1",
          text: "What project ideas are you guys working on for the science fair?",
        },
        { sender: "Student 2", text: "I'm thinking about a volcano model." },
      ],
      id: 2,
      date: "2024-12-10",
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [selectedThread, setSelectedThread] = useState(null);
  const [filter, setFilter] = useState("mostRecent");

  const handlePostChange = (e) => setNewPost(e.target.value);

  const handleSubmitPost = (threadId) => {
    if (newPost.trim()) {
      const updatedThreads = threads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              messages: [
                ...thread.messages,
                { sender: "Student", text: newPost },
              ],
            }
          : thread
      );
      setThreads(updatedThreads);
      setNewPost("");
    }
  };

  const handleThreadSelect = (threadId) => setSelectedThread(threadId);

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredThreads = threads.sort((a, b) => {
    if (filter === "mostRecent") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full flex justify-between mb-4">
        <TitleComponent title="Class Discussions" />
        <div className="flex items-center">
          <label htmlFor="filter" className="text-md text-gray-700 mr-2">
            Filter by:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-md"
          >
            <option value="mostRecent">Most Recent</option>
          </select>
        </div>
      </div>

      <div className="space-y-8">
        {filteredThreads.map((thread) => (
          <div
            key={thread.id}
            className={`bg-white p-6 rounded-lg shadow-sm transition-transform transform cursor-pointer ${
              selectedThread === thread.id
                ? "border border-blue-200 shadow-md shadow-blue-200"
                : ""
            }`}
            onClick={() => handleThreadSelect(thread.id)}
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {thread.topic}
            </h2>
            <div className="mt-4 text-gray-600">
              {thread.messages.map((msg, idx) => (
                <div key={idx} className="mb-2">
                  <strong className="font-semibold">{msg.sender}:</strong>{" "}
                  {msg.text}
                </div>
              ))}
            </div>

            {selectedThread === thread.id && (
              <div className="mt-4">
                <textarea
                  value={newPost}
                  onChange={handlePostChange}
                  placeholder="Type your reply"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleSubmitPost(thread.id)}
                  className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Post Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDiscussions;
