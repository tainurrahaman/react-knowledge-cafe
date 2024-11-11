import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3  ml-6 ">
            <div className="border-indigo-600 mb-4 bg-[#F0EDFE]  rounded-lg p-7">
                <h3 className="font-bold text-[#6047EC] text-2xl text-center">Spent time on read: {readingTime} min</h3>
            </div>
           <div className="p-7 bg-[#F3F3F3]  rounded-lg pt-10">
             <h2 className="font-bold text-2xl text-[#111111]">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number
}

export default Bookmarks;