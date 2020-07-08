import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 500;

export default class Ranges extends React.Component {
    state = {
        values: [250]
    };
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    marginBottom: "15px"
                }}
            >
                <Range
                    values={this.state.values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={values => this.setState({ values })}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "3px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values: this.state.values,
                                        colors: ["#40A944", "#ccc"],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "15px",
                                width: "15px",
                                border: "2px solid #40A944",
                                borderRadius: "99px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #aaa"
                            }}
                        >
                            <div
                                style={{
                                    height: "16px",
                                    width: "5px",
                                    backgroundColor: isDragged ? "" : ""
                                }}
                            />
                        </div>
                    )}
                />
                <div className='w-100'>
                    <button className='btn btn-dark' style={{ borderRadius: '999px', height: '30px', padding: '2px 10px', fontSize: '12px' }}>Filter</button>
                    <output className='float-right' id="output" >
                        ${this.state.values[0].toFixed(1)}
                    </output>
                </div>
            </div>
        );
    }
}
