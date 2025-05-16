import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const App = () => (
    <div className="flex h-full font-kanit">
      <div className="mx-auto flex flex-col items-center">
        <div className="pt-[2.5rem]">
          <h1 className="text-custom-black font-medium text-[1.625rem] uppercase mb-lg">todo list</h1>
        </div>
        <div className="flex">
          <Input/>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <button>switch</button>
        </div>
      </div>

    </div>
);

export default App
