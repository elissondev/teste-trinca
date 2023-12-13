import React from 'react';
import Card from "@/components/Card";
import {Loader} from "@/components/Loader/index";

type Props = {
    minHeight: number
};

export function LoaderContainer({minHeight}: Props) {
    return (
        <div className="container p-relative">
            <Card style={{minHeight}} padding="p-relative">
                <Loader center />
            </Card>
        </div>
    );
}