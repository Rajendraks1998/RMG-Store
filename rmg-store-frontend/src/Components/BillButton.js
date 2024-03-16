import { Badge, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BillButton = ({HandleAddingItem,adding,SelectedProducts}) => {

    return (
        <div>
            <Badge badgeContent={adding.length} color='secondary' >
                <Button color='inherit' variant='outlined'  size='large' onClick={() => HandleAddingItem()}>
                    {/* Generate Bill */}
                    <NavLink to={"billing"} style={{ color: "white", textDecoration: 'none' }}>
                        Generate Bill
                    </NavLink>
                </Button>
            </Badge>
        </div>
    )
}

export default BillButton
