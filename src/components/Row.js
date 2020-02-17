import React from "react";
import { Button } from "react-bootstrap";

const handlerEditRow = (row) => {
    console.log(row)
    
}


const sectionRow = (props,handlerDeleteRow) => {
    const {row, index, section} = props
    
    switch(section) {
        case "devLang":   return (
            <tr>
                <td>{row.devLangs}</td>
                <td>{row.devExperience}</td>
                <td>{row.devLastUse}</td>
                <td>
                    <Button onClick={() => handlerEditRow(row)}>Edytuj</Button>
                    <Button onClick={() => handlerDeleteRow(index,section)}>Usuń</Button>
                </td>
            </tr>
        );
        case "tools":   return (
            <tr>
                <td>{row.tool}</td>
                <td>{row.toolExperience}</td>
                <td>{row.toolLastUse}</td>
                <td>
                    <Button onClick={() => console.log("edit")}>Edytuj</Button>
                    <Button onClick={() => handlerDeleteRow(index,section)}>Usuń</Button>
                </td>
            </tr>
        );case "education":   return (
            <tr>
                <td>{row.school}</td>
                <td>{row.department}</td>
                <td>{row.direction}</td>
                <td>{row.title}</td>
                <td>{row.education_year}</td> 
            </tr>
        );
        case "certificates":   return (
            <tr>
                <td>{row.certificate_year}</td>
                <td>{row.certificate_name}</td>
                <td>{row.certificate_domain}</td>
                <td>{row.certificate_rganized}</td>
            </tr>
        );
        default:      return false
      }
}

const Row = (props) => {
    const {handlerDeleteRow} = props
    return (
        <>
            {sectionRow(props,handlerDeleteRow)}   
        </>
    )
};

export default Row;