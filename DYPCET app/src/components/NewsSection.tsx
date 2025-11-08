import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: "Free vaccination for 18-44 years age group is starting from 21 June 2021.",
      date: "June 21, 2021",
      category: "Health",
    },
    {
      id: 2,
      title: "New Academic Session 2025-26 Registration Opens",
      date: "March 15, 2025",
      category: "Admission",
    },
    {
      id: 3,
      title: "Technical Fest 'Visiom Waves' Successfully Concluded",
      date: "March 10, 2025",
      category: "Events",
    },
    {
      id: 4,
      title: "Hackathon Winners Announced - Innovation at its Best",
      date: "March 5, 2025",
      category: "Competition",
    },
  ];

  const notices = [
    {
      id: 1,
      title: "Internal Notice For Student Click Here",
      type: "Student",
      urgent: true,
    },
    {
      id: 2,
      title: "Faculty Development Program Schedule",
      type: "Staff",
      urgent: false,
    },
    {
      id: 3,
      title: "Semester Examination Guidelines",
      type: "Student",
      urgent: true,
    },
    {
      id: 4,
      title: "Research Grant Application Deadline",
      type: "Staff",
      urgent: false,
    },
  ];

  return (
    <section id="news" className="py-12 bg-academic-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest News & Events */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center justify-between">
                <span>LATEST NEWS & EVENTS</span>
                <Button variant="secondary" size="sm">
                  View all
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {newsItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3
                          className="font-semibold text-gray-900 hover:text-primary cursor-pointer"
                          onClick={() => navigate(`/news/${item.id}`)}
                        >
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-500">{item.date}</span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <ExternalLink
                        className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer"
                        onClick={() => navigate(`/news/${item.id}`)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notice Board */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="bg-stats-bg text-white">
              <CardTitle>NOTICE BOARD</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="students" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-none">
                  <TabsTrigger 
                    value="students" 
                    className="bg-primary text-white data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    Students
                  </TabsTrigger>
                  <TabsTrigger 
                    value="staff"
                    className="bg-gray-100 text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary"
                  >
                    Staff
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="students" className="p-6 mt-0">
                  <div className="space-y-3">
                    {notices
                      .filter(notice => notice.type === "Student")
                      .map((notice) => (
                        <div key={notice.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            {notice.urgent && (
                              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                            )}
                            <span className="text-sm font-medium text-gray-900">
                              {notice.title}
                            </span>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer" />
                        </div>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="staff" className="p-6 mt-0">
                  <div className="space-y-3">
                    {notices
                      .filter(notice => notice.type === "Staff")
                      .map((notice) => (
                        <div key={notice.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            {notice.urgent && (
                              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                            )}
                            <span className="text-sm font-medium text-gray-900">
                              {notice.title}
                            </span>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer" />
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;