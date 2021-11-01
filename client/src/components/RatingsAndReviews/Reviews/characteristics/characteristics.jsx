import React from 'react';

class Characteristics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
   
    render() {
        return (
            <table className="review-chars">
                <thead>
                    <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <td><label />Size</td>
                        <td><input type="radio" />A size too small</td>
                        <td><input type="radio" />1/2 a size too small</td>
                        <td><input type="radio" />Perfect</td>
                        <td><input type="radio" />1/2 a size too big</td>
                        <td><input type="radio" />A size too wide</td>
                    </tr>
                    <tr>
                        <td><label />Width</td>
                        <td><input type="radio" />Too narrow</td>
                        <td><input type="radio" />Slightly narrow</td>
                        <td><input type="radio" />Perfect</td>
                        <td><input type="radio" />Slightly wide</td>
                        <td><input type="radio" />Too wide</td>
                    </tr>
                    <tr>
                        <td><label />Comfort</td>
                        <td><input type="radio" />Uncomfortable</td>
                        <td><input type="radio" />Slightly uncomfortable</td>
                        <td><input type="radio" />Ok</td>
                        <td><input type="radio" />Comfortable</td>
                        <td><input type="radio" />Perfect</td>
                    </tr>
                    <tr>
                        <td><label />Quality</td>
                        <td><input type="radio" />Poor</td>
                        <td><input type="radio" />Below average</td>
                        <td><input type="radio" />What I expected</td>
                        <td><input type="radio" />Pretty great</td>
                        <td><input type="radio" />Perfect</td>
                    </tr>
                    <tr>
                        <td><label />Length</td>
                        <td><input type="radio" />Runs short</td>
                        <td><input type="radio" />Runs slightly short</td>
                        <td><input type="radio" />Perfect</td>
                        <td><input type="radio" />Runs slightly long</td>
                        <td><input type="radio" />Runs long</td>
                    </tr>
                    <tr>
                        <td><label />Fit</td>
                        <td><input type="radio" />Runs tight</td>
                        <td><input type="radio" />Runs slightly tight</td>
                        <td><input type="radio" />Perfect</td>
                        <td><input type="radio" />Runs slightly long</td>
                        <td><input type="radio" />Runs long</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Characteristics;