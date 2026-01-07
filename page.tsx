'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Star, Heart, Search, Award, Video } from 'lucide-react';

const mockTutors = [
  {
    id: '1',
    name: 'Sarah Johnson',
    bio: 'Specialized in executive function coaching and ADHD support with 8 years experience',
    subjects: ['Math', 'Executive Function', 'Study Skills'],
    grades: ['3-5', '6-8', '9-12'],
    hourlyRate: 65,
    verified: true,
    neurodivergentExperience: true,
    lgbtqAffirming: true,
    yearsExperience: 8,
    averageRating: 4.9,
    totalReviews: 47,
    videoUrl: 'https://example.com/video1',
  },
  {
    id: '2',
    name: 'Michael Chen',
    bio: 'Math specialist with autism certification and gifted education background',
    subjects: ['Math', 'Science', 'Test Prep'],
    grades: ['6-8', '9-12'],
    hourlyRate: 70,
    verified: true,
    neurodivergentExperience: true,
    lgbtqAffirming: true,
    yearsExperience: 6,
    averageRating: 4.8,
    totalReviews: 32,
    videoUrl: 'https://example.com/video2',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    bio: 'Reading specialist focused on dyslexia intervention and literacy development',
    subjects: ['Reading', 'Writing', 'English'],
    grades: ['K-2', '3-5', '6-8'],
    hourlyRate: 60,
    verified: true,
    neurodivergentExperience: true,
    lgbtqAffirming: true,
    yearsExperience: 10,
    averageRating: 5.0,
    totalReviews: 58,
  },
];

export default function TutorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [neurodivergent, setNeurodivergent] = useState(false);
  const [lgbtqAffirming, setLgbtqAffirming] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Tutor</h1>
            <p className="text-xl text-blue-100">
              All tutors are certified, supervised, and trained in neurodiversity-affirming practices
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              <aside className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Subject</Label>
                      <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Subjects</SelectItem>
                          <SelectItem value="math">Math</SelectItem>
                          <SelectItem value="reading">Reading</SelectItem>
                          <SelectItem value="writing">Writing</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="executive-function">Executive Function</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Grade Level</Label>
                      <Select value={gradeFilter} onValueChange={setGradeFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Grades</SelectItem>
                          <SelectItem value="k-2">K-2</SelectItem>
                          <SelectItem value="3-5">3-5</SelectItem>
                          <SelectItem value="6-8">6-8</SelectItem>
                          <SelectItem value="9-12">9-12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="neurodivergent"
                          checked={neurodivergent}
                          onCheckedChange={(checked) => setNeurodivergent(checked as boolean)}
                        />
                        <Label htmlFor="neurodivergent" className="cursor-pointer">
                          Neurodivergent Experience
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="lgbtq"
                          checked={lgbtqAffirming}
                          onCheckedChange={(checked) => setLgbtqAffirming(checked as boolean)}
                        />
                        <Label htmlFor="lgbtq" className="cursor-pointer">
                          LGBTQ+ Affirming
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              <div className="lg:col-span-3 space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search by name or specialty..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-6">
                  {mockTutors.map((tutor) => (
                    <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <Avatar className="h-24 w-24">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tutor.name}`} />
                            <AvatarFallback>
                              {tutor.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-xl font-semibold">{tutor.name}</h3>
                                  {tutor.verified && (
                                    <Badge className="bg-blue-600">
                                      <Award className="h-3 w-3 mr-1" />
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < Math.floor(tutor.averageRating)
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-600">
                                    {tutor.averageRating} ({tutor.totalReviews} reviews)
                                  </span>
                                </div>
                              </div>

                              <div className="text-right">
                                <p className="text-2xl font-bold text-blue-600">
                                  ${tutor.hourlyRate}
                                  <span className="text-sm text-gray-600 font-normal">/hr</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                  {tutor.yearsExperience} years exp.
                                </p>
                              </div>
                            </div>

                            <p className="text-gray-600">{tutor.bio}</p>

                            <div className="flex flex-wrap gap-2">
                              {tutor.subjects.map((subject) => (
                                <Badge key={subject} variant="secondary">
                                  {subject}
                                </Badge>
                              ))}
                              {tutor.neurodivergentExperience && (
                                <Badge variant="outline" className="border-green-600 text-green-600">
                                  Neurodiversity
                                </Badge>
                              )}
                              {tutor.lgbtqAffirming && (
                                <Badge variant="outline" className="border-purple-600 text-purple-600">
                                  LGBTQ+ Affirming
                                </Badge>
                              )}
                            </div>

                            <div className="flex gap-2 pt-2">
                              <Button className="flex-1">Request Tutor</Button>
                              {tutor.videoUrl && (
                                <Button variant="outline">
                                  <Video className="h-4 w-4 mr-2" />
                                  Watch Intro
                                </Button>
                              )}
                              <Button variant="ghost" size="icon">
                                <Heart className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
