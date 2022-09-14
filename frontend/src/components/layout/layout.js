import React from "react";
import { Outlet } from "react-router-dom";

class Layout extends React.Component {

    render() {
        return (
            <div className="flex flex-row justify-center pt-10">
                <div className="mb-3">
                    <div className="rounded-lg shadow-lg bg-white">
                        <div className="p-6">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;