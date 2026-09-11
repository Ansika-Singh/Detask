import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  Star,
  GitBranch,
  Bell,
  Lock,
} from "lucide-react";

export default async function LandingPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">

      {/* ─── NAVBAR ──────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-4"
        style={{ background: "rgba(8,8,8,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
            <GitBranch className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">Detask</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <Link href="/dashboard"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}>
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <>
              <Link href="/login"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2">
                Sign in
              </Link>
              <Link href="/register"
                className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}>
                Get Started Free
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}>
            <Zap className="w-3.5 h-3.5" />
            Real-time collaboration, reimagined
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.0]">
            Ship faster.
            <br />
            <span style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Stay in sync.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Detask is the task management platform built for modern engineering teams.
            Role-based access control, live Kanban boards, and real-time collaboration —
            all in one place.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {session ? (
              <Link href="/dashboard"
                className="flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105 w-full sm:w-auto justify-center"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}>
                Go to Dashboard <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <Link href="/register"
                  className="flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105 w-full sm:w-auto justify-center"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}>
                  Start for free <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/login"
                  className="flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10 w-full sm:w-auto justify-center"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#e5e7eb" }}>
                  Sign in to your account
                </Link>
              </>
            )}
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {["#7c3aed","#4f46e5","#2563eb","#0891b2","#059669"].map((c,i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080808]"
                  style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-white font-semibold">2,000+</span> teams already using Detask
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              <span className="text-sm text-gray-400 ml-1">5.0</span>
            </div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mt-12 w-full max-w-6xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden text-left"
            style={{ border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 0 50px rgba(124,58,237,0.25), 0 80px 120px -40px rgba(0,0,0,0.8)" }}>
            
            {/* Browser header bar */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#141414", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-4 h-6 rounded-md text-center text-xs text-gray-400 flex items-center justify-center font-mono gap-1"
                style={{ background: "rgba(255,255,255,0.05)" }}>
                <Lock className="w-3 h-3 text-emerald-400" /> app.detask.io/dashboard
              </div>
            </div>

            {/* App UI Content Mockup */}
            <div className="p-5 space-y-5" style={{ background: "#0c0c0e" }}>
              {/* App Navbar */}
              <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    Hackathon Submission
                  </div>
                  <span className="text-xs text-gray-400 hidden sm:inline">Workspace: <span className="text-white font-medium">Detask HQ</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-semibold flex items-center gap-1 shadow-lg shadow-purple-900/40">
                    + New Task
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-xs font-bold text-white border border-white/20">
                    A
                  </div>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                
                {/* Column 1: To Do */}
                <div className="rounded-xl p-3 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-xs font-bold text-gray-300">To Do</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-400">2</span>
                  </div>

                  <div className="rounded-xl p-3.5 space-y-2.5 bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white leading-snug">Build Drag & Drop Kanban</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">HIGH</span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Integrate fluid touch and mouse dnd-kit interactions.</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-500 flex items-center gap-1">💬 2 comments</span>
                      <div className="w-5 h-5 rounded-full bg-purple-600 text-[10px] font-bold text-white flex items-center justify-center">C</div>
                    </div>
                  </div>

                  <div className="rounded-xl p-3.5 space-y-2.5 bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white leading-snug">Setup SQLite & Prisma</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">MEDIUM</span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Draft relational database schema for tasks and projects.</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-500">Jul 14</span>
                      <div className="w-5 h-5 rounded-full bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center">D</div>
                    </div>
                  </div>
                </div>

                {/* Column 2: In Progress */}
                <div className="rounded-xl p-3 space-y-3" style={{ background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.15)" }}>
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-bold text-purple-300">In Progress</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">2</span>
                  </div>

                  <div className="rounded-xl p-3.5 space-y-2.5 bg-purple-950/20 border border-purple-500/30 shadow-lg shadow-purple-950/50">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white leading-snug">Implement RBAC Middleware</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">HIGH</span>
                    </div>
                    <p className="text-[11px] text-purple-200/70 line-clamp-2">Server-side permission checks for Admin, Manager, Member.</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-purple-300/80 flex items-center gap-1">💬 4 comments</span>
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-[10px] font-bold text-white flex items-center justify-center">B</div>
                    </div>
                  </div>

                  <div className="rounded-xl p-3.5 space-y-2.5 bg-white/[0.04] border border-white/[0.08]">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white leading-snug">Real-time Syncing Engine</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">MEDIUM</span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Live task status broadcasts across user sessions.</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-500">Jul 15</span>
                      <div className="w-5 h-5 rounded-full bg-purple-600 text-[10px] font-bold text-white flex items-center justify-center">A</div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Review */}
                <div className="rounded-xl p-3 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-xs font-bold text-gray-300">Review</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-400">1</span>
                  </div>

                  <div className="rounded-xl p-3.5 space-y-2.5 bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white leading-snug">Design System & Dark Mode</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">LOW</span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-2">Custom CSS tokens, glassmorphism, and color palette.</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-500">Jul 16</span>
                      <div className="w-5 h-5 rounded-full bg-purple-600 text-[10px] font-bold text-white flex items-center justify-center">A</div>
                    </div>
                  </div>
                </div>

                {/* Column 4: Done */}
                <div className="rounded-xl p-3 space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-gray-300">Done</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">2</span>
                  </div>

                  <div className="rounded-xl p-3.5 space-y-2.5 bg-white/[0.03] border border-white/[0.06] opacity-85">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-gray-300 line-through leading-snug">User Auth & NextAuth JWT</h4>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">DONE</span>
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-2">Credentials provider with bcrypt password hashing.</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-600">Jul 12</span>
                      <div className="w-5 h-5 rounded-full bg-purple-600 text-[10px] font-bold text-white flex items-center justify-center">A</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Glow under mockup */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 blur-3xl opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(to right, #7c3aed, #4f46e5)" }} />
        </div>
      </section>

      {/* ─── LOGOS / TRUSTED BY ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-sm font-medium text-gray-600 uppercase tracking-widest mb-10">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
          {["Acme Corp","Vercel","Linear","Stripe","Figma","Notion"].map(name => (
            <span key={name} className="text-xl font-bold text-gray-300">{name}</span>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────────── */}
      <section id="features" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" }}>
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-6">
            Built for the way
            <span style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {" "}teams actually work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything your team needs to move fast without breaking things.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Zap, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", title: "Real-time Sync", desc: "Powered by Pusher. Every move, comment, and status change syncs instantly across all screens — no refresh needed." },
            { icon: Shield, color: "#7c3aed", bg: "rgba(124,58,237,0.1)", title: "Role-Based Access", desc: "Admin, Manager, and Member roles with server-side enforcement. Security isn&apos;t bolted on — it&apos;s built in from day one." },
            { icon: BarChart3, color: "#10b981", bg: "rgba(16,185,129,0.1)", title: "Kanban Boards", desc: "Fluid drag-and-drop interfaces. Visualize your workflow, spot bottlenecks, and ship features faster than ever." },
            { icon: Users, color: "#3b82f6", bg: "rgba(59,130,246,0.1)", title: "Team Management", desc: "Invite members, assign roles, and manage your entire workspace from a centralized admin dashboard." },
            { icon: Bell, color: "#ec4899", bg: "rgba(236,72,153,0.1)", title: "Activity Logs", desc: "Full audit trail of every action taken. Stay informed, stay compliant, and debug issues instantly." },
            { icon: Lock, color: "#6366f1", bg: "rgba(99,102,241,0.1)", title: "Secure Auth", desc: "Industry-standard JWT sessions with bcrypt password hashing. Your data stays yours, always." },
          ].map(({ icon: Icon, color, bg, title, desc }) => (
            <div key={title} className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-purple-500/30"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: bg, border: `1px solid ${color}30` }}>
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-32 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
            Up and running in{" "}
            <span style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              3 minutes
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-20">No credit card. No complex setup. Just create and go.</p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { step: "01", title: "Create your account", desc: "Sign up in seconds. Your personal workspace is provisioned automatically — no configuration needed." },
              { step: "02", title: "Invite your team", desc: "Add teammates and assign them Admin, Manager, or Member roles. Permissions take effect instantly." },
              { step: "03", title: "Start shipping", desc: "Create projects, add tasks to your Kanban board, and collaborate in real-time. That's all." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-6xl font-black mb-6 leading-none"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.4), transparent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "99.9%", label: "Uptime SLA" },
            { number: "< 50ms", label: "Real-time latency" },
            { number: "2,000+", label: "Teams onboarded" },
            { number: "10M+", label: "Tasks managed" },
          ].map(({ number, label }) => (
            <div key={label} className="space-y-2">
              <div className="text-4xl font-black"
                style={{ background: "linear-gradient(135deg, #fff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {number}
              </div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl overflow-hidden p-16"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(79,70,229,0.3) 100%)", border: "1px solid rgba(124,58,237,0.4)" }}>
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 50%, #4f46e5 0%, transparent 50%)" }} />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
                Ready to ship faster?
              </h2>
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of engineering teams who use Detask to stay aligned, move fast, and build great things.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register"
                  className="flex items-center justify-center gap-2 text-base font-semibold px-10 py-4 rounded-full bg-white text-[#080808] transition-all duration-200 hover:bg-gray-100 hover:scale-105">
                  Get started — it&apos;s free <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/login"
                  className="flex items-center justify-center gap-2 text-base font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}>
              <GitBranch className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-lg">Detask</span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-300 transition-colors">How it works</a>
            <Link href="/login" className="hover:text-gray-300 transition-colors">Sign In</Link>
            <Link href="/register" className="hover:text-gray-300 transition-colors">Sign Up</Link>
          </div>
          <p className="text-sm text-gray-600">© 2026 Detask. Built for the hackathon.</p>
        </div>
      </footer>
    </div>
  );
}
