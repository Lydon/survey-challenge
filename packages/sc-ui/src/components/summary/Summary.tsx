import React from "react";
import { useSelector } from "react-redux";
import { getSummary } from "@sc/sdk";

export const Summary: React.FC = () => {
    const getSummaryData = useSelector(getSummary);
    const DEFAULT_PLACEHOLDER = "-";

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <pre>{getSummaryData?.name || DEFAULT_PLACEHOLDER}</pre>
                        </dd>
                        <dt>Email</dt>
                        <dd>
                            <pre>{getSummaryData?.email || DEFAULT_PLACEHOLDER}</pre>
                        </dd>
                        <dt>Age</dt>
                        <dd>
                            <pre>{getSummaryData?.age}</pre>
                        </dd>
                        <dt>Gender</dt>
                        <dd>
                            <pre>{getSummaryData?.gender}</pre>
                        </dd>
                        <dt>Book</dt>
                        <dd>
                            <pre>{getSummaryData?.book}</pre>
                        </dd>
                        <dt>Colours</dt>
                        <dd>
                            <pre>{getSummaryData?.colours}</pre>
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    )
}
