import React, { Component } from 'react';
import { VesselContext} from "../../Context"
 
class FeaturedVessels extends Component {
    static contextType = VesselContext
    render() { 
        return (
            <div>
                FeaturedVessels
            </div>
        );
    }
}
 
export default FeaturedVessels;