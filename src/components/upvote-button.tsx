"use client"

export default function UpvoteButton() {
    return <button onClick={() => {
        console.log("Upvote clicked");
        alert("Upvoted!");
    }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Upvote
    </button>
}