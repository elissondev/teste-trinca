import React from "react";
import {LoaderContainer} from "@/components/Loader/LoaderContainer";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoaderContainer minHeight={300} />
}