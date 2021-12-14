import { Box } from "@chakra-ui/layout"
import { FC } from "react"
import { Chat } from "./Chat"
import { General } from "./General"
import { Main } from "./Main"
import { Map } from "./Map"
import { Menus } from "./Menus"

export const Game: FC = (props) => {
    return (
        <Box>
            <Chat />
            <General />
            <Main />
            <Map />
            <Menus />
        </Box>
    )
}
