import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";


export const SpotifyNowPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
            setLoading(false);
        });
    });
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && !result.isPlaying(
                <div><span>Currently offline</span>
                </div>
            )}
            {!loading && result.isPlaying(
                <div>
                    <div>
                        
                        <span>Now playing</span>
                    </div>
                    <div>
                        <img src={result.albumImageUrl} alt={`${result.title} album art`} />
                        
                        <a href={result.songUrl} target="_blank">{result.title}</a>
                        <p>{result.artist}</p>
                    </div>
                </div>
            )}
        </div>
    )
};

//*[@id="mw-content-text"]/div[1]/table[2]/tbody/tr[1]/td[1]
//*[@id="mw-content-text"]/div[1]/table[2]/tbody/tr[1]/td[5]
//*[@id="mw-content-text"]/div[1]/table[2]/tbody/tr[2]/td[2]

//*[@id="mw-content-text"]/div[1]/table[2]/tbody/tr[3]/td[5]
//*[@id="mw-content-text"]/div[1]/table[2]/tbody/tr[4]/td[2]

//*[@id="mw-content-text"]/div[1]/table[3]/tbody/tr[1]/td[4]