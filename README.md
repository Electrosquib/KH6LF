# How to use:
Set up web server:
python3 -m http.server 9000

# Folder structure:
-| m-d-y=title
  -| meta.json
  -| blog.md
  -| img1.png
  -| img2.png
-| 03-30-05=Sample_Post
-| categories.json
-| order.json

The categories.json and order.json files are updated when a new one is released.
categories.json is a list of all the categories on the blog. Each category has a list of all posts pertaining to it. 
order.json is a list of posts by chronological order (most recent posts first).
The indexer.py script composes the indexes. It should be ran when before a new post is uploaded.
