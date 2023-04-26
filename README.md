# Daphne Makes ShakeSearch a Little Better

## Things I did
- Rename 'master' branch to 'main'
- Searches are now case insensitive on the backend
- Played with hot reloading tool ['Air'](https://github.com/cosmtrek/air) because reasons
- Integrated Tailwind for styling and made results a bit more presentable and easy to read
- Display number of returned search results (but it's always plural, you have "1 Search **Results**" 😜)
- Highlight search term in results
- Deployed here: https://daphsearch.onrender.com/
- Learned a lot! Read a lot!

## Things I'd like to do
There are so many things I'd like to do! I spent quite a while getting caught up in brainstorming and interpreting details of the backend, in addition to trying to implement some semblance of fuzzy search or to find a package that would allow it without much effort to integrate. The end result doesn't look like an awful lot, but I went on quite a few undocumented adventures and alternate implementations that didn't pan out. Oops. 

- Pagination/infinite scroll, loading spinner or skeleton
- Fuzzy search allowing for better matches with imprecise or incorrect input
- Additional information provided -- title, page, etc
- Search filtering and sorting
- Complete search results -- no more cutting off mid-word or mid-sentence
- Ranked results with adjustable blurb size or even "see more" blurb option
- Better design, some more personality :) Regretting not throwing in a marquee tag somewhere now
- Different data storage solution -- not a text file, but a real data store
- And in implementing a different storage solution, a more intuitive and easier way to retrieve search results and metadata than `SuffixArray`
- Error handling and thorough testing
- Get fancy with React or some frameworks, even fancier with caching

Thank you!