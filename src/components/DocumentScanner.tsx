import { useState } from "react";
import { Upload, FileText, Receipt, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocumentScanner = () => {
  const [activeTab, setActiveTab] = useState("resume");

  const documentTypes = [
    { value: "resume", label: "Resume", icon: FileText },
    { value: "invoice", label: "Invoice", icon: Receipt },
    { value: "challan", label: "Delivery Challan", icon: Truck },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Scanner</CardTitle>
        <CardDescription>Select document type and upload your file for processing</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            {documentTypes.map((type) => {
              const Icon = type.icon;
              return (
                <TabsTrigger key={type.value} value={type.value} className="gap-2">
                  <Icon className="h-4 w-4" />
                  {type.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {documentTypes.map((type) => (
            <TabsContent key={type.value} value={type.value} className="mt-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Analyze {type.label.toLowerCase()}s and extract professional information
                </p>
                
                <div 
                  className="group relative rounded-lg border-2 border-dashed border-primary/30 p-12 text-center transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_hsla(258,85%,57%,0.15)] cursor-pointer"
                  style={{ background: 'var(--gradient-upload)' }}
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110" style={{ boxShadow: '0 0 0 8px hsla(258, 85%, 57%, 0.05)' }}>
                    <Upload className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">Upload {type.label}</h3>
                  <p className="mt-3 text-sm font-medium text-primary/80">
                    Drag & drop your {type.label.toLowerCase()} here, or click to browse
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG
                  </p>
                  <Button className="mt-8 shadow-md hover:shadow-lg transition-shadow" size="lg">
                    <Upload className="mr-2 h-5 w-5" />
                    Browse Files
                  </Button>
                </div>
                
                <Button className="w-full" size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Scan {type.label}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DocumentScanner;
