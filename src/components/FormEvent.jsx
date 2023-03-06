import React from 'react';
import '../App.css';

// function setAction() {
//       alert("Favorite weird creature")
// }

// class FormEvent extends Component {
function FormEvent() {

    // render() {
        const defaultValue = new Date().toISOString().split('T')[0]
        return (
            <div className="center visual">
                <h2>Choose Dates</h2>
                {/* <form action="http://localhost:8080/getCount" method='POST'> */}
                <form className="bottom-spacing" action="/getCount">
                <table className="table table-borderless ">
                    <tbody>
                    <tr>
                        <td><label>From:</label></td>
                        <td><input type="date" defaultValue={defaultValue} max={defaultValue} id="startDate" name="startDate" required/> <br/></td>
                    </tr>
                    <tr>
                        <td><label>To:</label></td>
                        <td><input type="date" defaultValue={defaultValue} max={defaultValue} id="endDate" name="endDate" required/> <br/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" className="button" name="action" value="IdentifyEvents" />
                        <input type="submit" className="button" name="action" value="TrackEvents"/></td>
                    </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    // }
}

export default FormEvent;