import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  
  export function DialogForm({
    triggerButtonText,
    title,
    description,
    fields,
    onSubmit
  }) {
    const handleSubmit = event => {
      event.preventDefault()
      // const formData = Object.fromEntries(new FormData(event.currentTarget))
      // onSubmit(formData)
    }
  
    return (
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {triggerButtonText}
            </button>
          </DialogTrigger>
  
          <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border rounded-md">
            <DialogHeader>
              <DialogTitle className="text-[#165DFF] text-[26px]">
                {title}
              </DialogTitle>
              {description && <p className="text-[14px]">{description}</p>}
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 py-4">
              {fields.map(field => (
                <div key={field.id} className="flex flex-col">
                  <Label
                    htmlFor={field.id}
                    className="mb-2 font-normal text-[12px]"
                  >
                    {field.label}
                  </Label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px] rounded-md resize-none focus"
                    />
                  ) : (
                    <Input
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                    />
                  )}
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="reset"
                  className="bg-white text-[#165DFF] py-1 px-3 rounded border border-[#165DFF] text-[14px]"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="bg-[#165DFF] text-white py-1 px-3 rounded text-[14px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
  