import { FormattedMessage } from "react-intl";
import CompactArea from "../../CompactArea";
import Grid from "../../Grid";
import ScrollTarget, { ScrollId } from "../../ScrollTarget";
import SectionHeadline from "../../SectionHeadline";
import { useEffect, useState } from "react";
import SectionSpace from "../../SectionSpace";

export interface FruhtrunkProps {}

{
    /* <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1282827850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://ubuimperator.bandcamp.com/album/fruhtrunk">Fruhtrunk von Ubu Imperator</a></iframe> */
}

1282827850;

export default function Fruhtrunk(props: FruhtrunkProps) {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
        <>
            <ScrollTarget id={ScrollId.fruhtrunk} />
            <Grid>
                <CompactArea>
                    <SectionHeadline>Release - Fruhtrunk</SectionHeadline>
                    <p className="mb-2 md:mb-4">
                        <FormattedMessage id={"home.fruhtrunk.text1"}></FormattedMessage>
                    </p>
                    <p className="mb-6 md:mb-14">
                        <FormattedMessage id={"home.fruhtrunk.text2"}></FormattedMessage>
                    </p>
                    <div className="flex justify-center">
                        {!isFirstRender && (
                            <iframe
                                className="h-[538px] w-[300px] border-0 md:h-[638px] md:w-[400px]"
                                title={"bandcamp"}
                                src="https://bandcamp.com/EmbeddedPlayer/album=1282827850/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
                                seamless
                            >
                                <a href="https://ubuimperator.bandcamp.com/album/ubudemo">Fruhtrunk</a>
                            </iframe>
                        )}
                    </div>
                </CompactArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
