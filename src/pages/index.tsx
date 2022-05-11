import type {GetStaticPropsContext} from 'next'
import styled from "styled-components";
import {client} from "../client";
import React from 'react'
import {getNextStaticProps} from "@faustjs/next";

const StyledText = styled.div`
    color: lime;
`

export default function Home() {
    const { useQuery } = client;
    const generalSettings = useQuery().generalSettings;
    // const gigs = useQuery().gigs()?.nodes;

    return (
        <>
            <h1>Hello</h1>
            {generalSettings && generalSettings.title}
            {/*{*/}
            {/*    gigs?.map((gig: any, index) =>*/}
            {/*        <React.Fragment key={index}>*/}
            {/*            <div>{gig?.headline}</div>*/}
            {/*        </React.Fragment>*/}
            {/*    )*/}

            {/*}*/}
            <StyledText>styled text</StyledText>
        </>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return getNextStaticProps(context, {
        Page: Home,
        client,
    });
}

