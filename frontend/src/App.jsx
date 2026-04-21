import React from 'react'
import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to Zentrix</h1>
      <div className="space-y-4">
        <Button>Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  )
}

export default App
