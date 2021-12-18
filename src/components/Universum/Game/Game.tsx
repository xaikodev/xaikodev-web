import { Box } from "@chakra-ui/layout"
import { FC } from "react"
import { Chat } from "./Chat"
import { User } from "./User"
import { Main } from "./Main"
import { Map } from "./Map"
import { Menus } from "./Menus"

export const Game: FC = (props) => {
    return (
        <Box>
            <Chat />
            <User />
            <Main />
            <Map />
            <Menus />
        </Box>
    )
}
