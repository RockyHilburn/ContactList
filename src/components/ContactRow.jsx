import React from "react"

export default ContactRow({contact}) {
    return (
        <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    )
}