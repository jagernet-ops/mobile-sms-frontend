import { emojiLibJsonData } from "universal-emoji-parser";

const EmojiDataList = ({ appendEmoji }) => {
    const emojiOptions = [];
    for (const key in emojiLibJsonData) {
        emojiOptions.push(key);
    }
    return (
        <select
            className="emojiList"
            onChange={(e) => appendEmoji((message) => message + e.target.value)}
        >
            {emojiOptions.map((emoji, index) => {
                return (
                    <option value={emoji} key={index}>
                        {emoji}
                    </option>
                );
            })}
        </select>
    );
};

export default EmojiDataList;
