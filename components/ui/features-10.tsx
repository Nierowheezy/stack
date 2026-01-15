
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from './card'
import { cn } from '../../lib/utils'
import { Globe, LucideIcon, Zap, ShieldCheck } from 'lucide-react'

// Define interfaces and sub-components first to avoid hoisting issues with const declarations
interface FeatureCardProps {
    // Made children optional to fix TS error regarding missing children in prop type during JSX usage
    children?: ReactNode
    className?: string
    delay?: number
}

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

const FeatureCard = ({ children, className, delay = 0 }: FeatureCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="h-full"
    >
        <Card className={cn('group relative rounded-none border-white/5 bg-black/40 backdrop-blur-sm h-full overflow-hidden', className)}>
            <CardDecorator />
            {children}
        </Card>
    </motion.div>
)

interface CardHeadingProps {
    icon: LucideIcon
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-4">
        <span className="text-primary/60 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4">
            <Icon className="size-3" />
            {title}
        </span>
        <p className="text-2xl font-bold text-white tracking-tight">{description}</p>
    </div>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'blue'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={cn("flex flex-col items-center", className)}>
        <div className="bg-gradient-to-b from-white/10 size-fit rounded-2xl to-transparent p-px">
            <div className="bg-black/60 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-6">
                {circles.map((circle, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        className={cn('size-8 rounded-full border sm:size-10 shadow-lg', {
                            'border-primary bg-black': circle.pattern === 'none',
                            'border-primary bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'border',
                            'border-primary bg-[repeating-linear-gradient(-45deg,rgba(155,93,229,0.3),rgba(155,93,229,0.3)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'primary',
                            'border-blue-500 bg-[repeating-linear-gradient(-45deg,rgba(59,130,246,0.3),rgba(59,130,246,0.3)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'blue',
                        })}></motion.div>
                ))}
            </div>
        </div>
        <span className="text-white/40 mt-3 block text-center text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </div>
)

export function AdvancedFeatures() {
    return (
        <section className="py-16 md:py-32 bg-transparent relative overflow-hidden">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center lg:text-left"
                >
                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4 block">Infrastructure</span>
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white mb-6">Built for scale.</h2>
                </motion.div>

                <div className="mx-auto grid gap-8 lg:grid-cols-2">
                    <FeatureCard delay={0.1}>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Globe}
                                title="Global Settlement"
                                description="Automated reconciliation across multiple jurisdictions instantly."
                            />
                        </CardHeader>

                        <div className="relative mb-6 border-t border-dashed border-white/5 sm:mb-0">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,rgba(155,93,229,0.1),transparent_100%)]"></div>
                            <div className="aspect-[16/9] p-1 px-6 flex items-center justify-center">
                                <motion.img
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
                                    alt="Data flow"
                                    className="w-full h-full object-cover rounded-xl grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard delay={0.2}>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={Zap}
                                title="Instant Webhooks"
                                description="Real-time data streaming from your terminals to your servers."
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,black_100%)]"></div>
                                <div className="aspect-[16/9] border border-white/5 bg-black/40 rounded-xl overflow-hidden">
                                    <motion.img
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop"
                                        alt="Server racks"
                                        className="w-full h-full object-cover grayscale opacity-30"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard className="p-12 lg:col-span-2" delay={0.3}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
                            <p className="mx-auto my-6 max-w-2xl text-balance text-2xl md:text-3xl font-bold text-white tracking-tight">
                                Enterprise-grade security with automated split-settlement intelligence.
                            </p>

                            <div className="flex justify-center gap-10 mt-12 overflow-hidden">
                                <CircularUI
                                    label="Authentication"
                                    circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                                />

                                <CircularUI
                                    label="Verification"
                                    circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                                />

                                <CircularUI
                                    label="Payout"
                                    circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                                />

                                <CircularUI
                                    label="Reporting"
                                    circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                    className="hidden sm:block"
                                />
                            </div>
                        </motion.div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}
