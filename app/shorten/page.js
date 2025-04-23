// shorten/page.js

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlsList, setUrlsList] = useState([]);

  // Fetch existing URLs on component mount
  useEffect(() => {
    fetch("/api/urls")
      .then((res) => res.json())
      .then((data) => data.success && setUrlsList(data.data))
      .catch(console.error);
  }, []);

  const generate = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shortUrl }),
    };

    fetch("/api/generate", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          // Refresh the URLs list after successful generation
          fetch("/api/urls")
            .then((res) => res.json())
            .then((data) => data.success && setUrlsList(data.data));

          setUrl("");
          setShortUrl("");
          alert("URL generated successfully!");
        } else {
          alert(result.message);
        }
      })
      .catch(console.error);
  };

  return (
    <div className="mx-auto lg:w-[70%] w-[88%] my-16 p-16 lg:p-24 rounded-lg flex flex-col items-center justify-center gap-4 bg-[#1d1d1d] text-white">
      <h1 className="font-semibold text-2xl">Simplified Link Management</h1>

      {/* Input Form */}
      <div className="flex flex-col gap-5  w-[80%] justify-center items-center">
        <div className="flex flex-col gap-3 w-full justify-center">
          <label htmlFor="url">Original URL</label>
          <input
            type="text"
            name="url"
            className="px-4 py-2 border border-gray-400  rounded-lg"
            value={url}
            placeholder="Enter your URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 w-full justify-center">
          <label htmlFor="shortUrl">Preferred Short URL</label>

          <input
            type="text"
            className="px-4 py-2 border border-gray-400  rounded-lg "
            value={shortUrl}
            placeholder="Enter preferred short URL"
            onChange={(e) => setShortUrl(e.target.value)}
          />
        </div>
        <div className="button  flex items-center justify-center ">
          <button
            onClick={generate}
            className=" shadow-lg px-5 rounded-full py-2 font-bold bg-white text-black w-fit">
            Generate
          </button>
        </div>
      </div>

      {/* URL List Table */}
      <div className="mt-8 w-full">
        <h2 className="text-xl font-semibold mb-4">Generated URLs</h2>
        <div className="rounded-lg overflow-hidden border border-[#444]">
          <table className="w-full">
            <thead className="bg-[#2d2d2d]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">
                  Original URL
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">
                  Short URL
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#444] bg-[#1d1d1d]">
              {urlsList.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#282828] transition-colors duration-200">
                  <td className="px-6 py-4 text-sm max-w-[200px] truncate">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white hover:underline">
                      {item.url}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link
                      href={`/${item.shortUrl}`}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 hover:underline">
                      {`${process.env.NEXT_PUBLIC_HOST}/${item.shortUrl}`}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {urlsList.length === 0 && (
            <div className="p-6 text-center bg-[#1d1d1d]">
              <p className="text-gray-400 text-sm">No URLs generated yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
