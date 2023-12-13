import React from 'react'
import ReactDOM from 'react-dom/client';


export default function Render() {

  return (
    <div>

    </div>
  )
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <div>
    <table border="1">
        <tr>
            <td>one</td>
            <td>one</td>
            <td>one</td>
        </tr>
        <tr>
            <td>one</td>
            <td>one</td>
            <td>one</td>
        </tr> <tr>
            <td>one</td>
            <td>one</td>
            <td>one</td>
        </tr>
    </table>
</div>
root.render(element);
