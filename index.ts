export type UserRole = 'ADMIN' | 'LEAD_SPECIALIST' | 'TUTOR' | 'PARENT' | 'STUDENT';

export type SessionStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';

export type ProgressStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED';

export type InvoiceStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

export type PayoutStatus = 'PENDING' | 'PROCESSING' | 'PAID' | 'FAILED';

export type RequestType = 'NEW_ASSIGNMENT' | 'REASSIGNMENT' | 'ADDITIONAL';

export type RequestStatus = 'PENDING' | 'APPROVED' | 'DENIED' | 'COMPLETED';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  stripeCustomerId?: string;
  avatarUrl?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TutorProfile {
  id: string;
  userId: string;
  bio: string;
  subjects: string[];
  grades: string[];
  certifications: string[];
  hourlyRate: number;
  videoUrl?: string;
  verified: boolean;
  neurodivergentExperience: boolean;
  lgbtqAffirming: boolean;
  yearsExperience: number;
  education: string;
  availabilityNotes: string;
  active: boolean;
  averageRating?: number;
  totalReviews?: number;
  user?: User;
}

export interface ParentProfile {
  id: string;
  userId: string;
  address?: string;
  emergencyContact?: string;
  subscriptionPlanId?: string;
  subscriptionStatus: string;
  user?: User;
}

export interface Student {
  id: string;
  parentId: string;
  name: string;
  grade: string;
  neuroProfile?: string;
  pronouns?: string;
  goals: string;
  assignedTutorId?: string;
  notes?: string;
  active: boolean;
  assignedTutor?: TutorProfile;
}

export interface Session {
  id: string;
  tutorId: string;
  studentId: string;
  startTime: string;
  endTime: string;
  status: SessionStatus;
  notes?: string;
  tutorNotes?: string;
  attendanceConfirmed: boolean;
  specialistApproved: boolean;
  calEventId?: string;
  tutor?: TutorProfile;
  student?: Student;
}

export interface Review {
  id: string;
  tutorId: string;
  parentId: string;
  studentId?: string;
  rating: number;
  comment: string;
  sessionId?: string;
  createdAt: string;
  parent?: ParentProfile;
}

export interface CurriculumTrack {
  id: string;
  name: string;
  description: string;
  category: string;
  order: number;
  active: boolean;
  lessonCount?: number;
}

export interface CurriculumLesson {
  id: string;
  trackId: string;
  title: string;
  description: string;
  content: string;
  order: number;
  estimatedDuration: number;
  materials?: any;
  track?: CurriculumTrack;
}

export interface StudentProgress {
  id: string;
  studentId: string;
  lessonId: string;
  status: ProgressStatus;
  score?: number;
  completedAt?: string;
  notes?: string;
  lesson?: CurriculumLesson;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  sessionsPerWeek: number;
  specialistOversight: boolean;
  stripePriceId?: string;
  active: boolean;
}

export interface Invoice {
  id: string;
  parentId: string;
  amount: number;
  status: InvoiceStatus;
  stripeInvoiceId?: string;
  issuedAt: string;
  paidAt?: string;
  description: string;
}

export interface TutorPayout {
  id: string;
  tutorId: string;
  sessionId: string;
  amount: number;
  status: PayoutStatus;
  paidAt?: string;
  stripeTransferId?: string;
  session?: Session;
}

export interface TutorRequest {
  id: string;
  parentId: string;
  studentId: string;
  requestedTutorId?: string;
  currentTutorId?: string;
  requestType: RequestType;
  reason: string;
  status: RequestStatus;
  adminNotes?: string;
  createdAt: string;
  resolvedAt?: string;
  student?: Student;
  requestedTutor?: TutorProfile;
  currentTutor?: TutorProfile;
}

export interface CertificationModule {
  id: string;
  name: string;
  description: string;
  content: string;
  required: boolean;
  order: number;
}

export interface TutorCertification {
  id: string;
  tutorId: string;
  moduleId: string;
  completedAt: string;
  score?: number;
  expiresAt?: string;
  module?: CertificationModule;
}
