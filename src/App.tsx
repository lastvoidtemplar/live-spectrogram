import Header from "./layout/header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import Recorder from "./components/recorder/recorder";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-100 bg-gray-700">
      <Header />
      <main className="container mx-auto py-6 flex-1 flex flex-col justify-center">
        <ResizablePanelGroup
          direction="horizontal"
          className="flex-1 rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <Recorder/>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center">
                  <span className="font-semibold">Controls</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center">
              <span className="font-semibold">Canvas</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}

export default App;
