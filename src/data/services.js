// The wellness services shown in navigation, cards, and detail pages.
import {
  Droplets,
  Flower2,
  HeartPulse,
  PersonStanding,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    slug: "yoga-therapy",
    name: "Yoga Therapy",
    icon: PersonStanding,
    image: "yoga-therapy.jpeg",
    blurb:
      "Gentle, guided movement that brings strength, flexibility and steadiness.",
    benefits: ["Mobility & posture", "Breath awareness", "Stress support"],
    duration: "45–60 minutes",
    detail:
      "A considered one-to-one practice, adapted to your comfort and current ability.",
  },
  {
    slug: "massage-therapy",
    name: "Massage Therapy",
    icon: HeartPulse,
    image: "massage-therapy.jpeg",
    blurb: "Restorative hands-on care designed to help the body unwind.",
    benefits: ["Deep relaxation", "Ease tired muscles", "Calm the senses"],
    duration: "45–75 minutes",
    detail:
      "Our therapists use nurturing touch and a soothing pace for a deeply restorative session.",
  },
  {
    slug: "meditation-therapy",
    name: "Meditation Therapy",
    icon: Flower2,
    image: "meditation-therapy.jpeg",
    blurb:
      "Guided stillness to help you reconnect with a calm, clear inner space.",
    benefits: ["Mental clarity", "Emotional balance", "Better rest rituals"],
    duration: "30–45 minutes",
    detail:
      "A peaceful, supported session using breath, focus and simple mindful techniques.",
  },
  {
    slug: "nabhi-therapy",
    name: "Nabhi Therapy",
    icon: Sparkles,
    image: "nabhi-therapy.jpeg",
    blurb:
      "A traditional abdominal wellbeing practice with personalised attention.",
    benefits: ["Digestive comfort", "Relaxation", "Body awareness"],
    duration: "30–45 minutes",
    detail:
      "A gentle traditional wellness session focused on the navel area and whole-body ease.",
  },
  {
    slug: "shiro-dhara-therapy",
    name: "Shiro Dhara Therapy",
    icon: Droplets,
    image: "shiro-dhara-therapy.jpeg",
    blurb: "A classic Ayurvedic ritual of warm oil flow for profound quiet.",
    benefits: ["Soothes the mind", "Supports sleep rituals", "Deep rest"],
    duration: "45–60 minutes",
    detail:
      "Warm herbal oil is gently streamed over the forehead in a serene, unhurried setting.",
  },
];

export const additionalServices = [
  "పంచకర్మ చికిత్సలు",
  "మధుమేహం",
  "అధిక బరువు తగ్గించుకొనుట",
  "మానసిక సమస్యలు",
  "మత్తు వ్యసనాల విముక్తి",
  "స్త్రీల రుతుక్రమ సమస్యలు",
  "ఆయుర్వేదిక్ అభ్యంగనం (మసాజ్)",
  "దాంపత్య సమస్యలు",
  "జీవన శైలి సమస్యలు",
  "సైనసైటిస్",
  "పైల్స్",
  "యోగ",
  "డైట్ చికిత్స",
  "నిద్రలేమి సమస్యలు",
  "శారీరక నొప్పుల ఉపశమనం",
  "పచ్చ కామెర్లు",
  "జీర్ణకోశ సమస్యలు (గ్యాస్ట్రిక్)",
  "మల బద్ధకం",
  "ఇమ్యూనిటీ పెంచుకొనుట",
];
