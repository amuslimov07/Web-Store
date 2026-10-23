import Tabs from "@/components/ui/Tabs/Tabs";

export default function Page() {
  const items = [
    { id: "0", label: "first" },
    { id: "1", label: "second" },
    { id: "2", label: "third" },
  ];
  return (
    <div className="flex justify-center ">
      <Tabs items={items}></Tabs>
    </div>
  );
}
