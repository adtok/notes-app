import { Button, MantineProvider, Text } from "@mantine/core"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Text>Hello World</Text>
      <Text>Button clicked {count} times</Text>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
    </MantineProvider>
  )
}

export default App
