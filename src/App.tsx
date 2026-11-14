/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceFacilities } from './components/ExperienceFacilities';
import { Transformations } from './components/Transformations';
import { ClassSchedule } from './components/ClassSchedule';
import { InstagramShowcase } from './components/InstagramShowcase';
import { BecomeATrainerSection } from './components/BecomeATrainerSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookVisitModal } from './components/BookVisitModal';
import { TrainerApplicationModal } from './components/TrainerApplicationModal';
import { DoorEntryExperience } from './components/DoorEntryExperience';

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState<boolean>(false);
  const [modalExperience, setModalExperience] = useState<string>('architectural-tour');
  const [modalClassTitle, setModalClassTitle] = useState<string | undefined>(undefined);
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);

  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState<boolean>(false);
  const [trainerRole, setTrainerRole] = useState<string>('Senior Strength & Biomechanics Coach');

  const openBookModal = (options?: {
    experience?: string;
    classTitle?: string;
  }) => {
    setModalExperience(options?.experience || 'architectural-tour');
    setModalClassTitle(options?.classTitle);
    setIsBookModalOpen(true);
  };

  const openTrainerModal = (role?: string) => {
    if (role) setTrainerRole(role);
    setIsTrainerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] selection:bg-[#FFD200] selection:text-black relative">
      {/* Architectural Door Entry Preloader */}
      <DoorEntryExperience
        isOpen={isDoorOpen}
        onOpen={() => setIsDoorOpen(true)}
      />

      {/* Top Navigation */}
      <Navbar onBookVisit={() => openBookModal()} />

      <main>
        {/* Full-Bleed Reception Lounge Hero */}
        <Hero onBookVisit={() => openBookModal()} />

        {/* Asymmetric Spaces Gallery with Real Photography */}
        <ExperienceFacilities onBookVisit={() => openBookModal({ experience: 'architectural-tour' })} />

        {/* Weekly Coached Timetable */}
        <ClassSchedule
          onReserveSpot={(classTitle) =>
            openBookModal({
              experience: 'signature-class',
              classTitle
            })
          }
        />

        {/* Integrated Club Numbers & Asymmetric Member Stories */}
        <Transformations onBookVisit={() => openBookModal({ experience: 'private-assessment' })} />

        {/* Instagram Showcase (@fitfuel.faridabad) */}
        <InstagramShowcase
          onBookSpace={(spaceName) =>
            openBookModal({
              experience: 'architectural-tour',
              classTitle: spaceName
            })
          }
        />

        {/* Coaching Faculty & Recruitment */}
        <BecomeATrainerSection onApplyTrainer={(role) => openTrainerModal(role)} />

        {/* Faridabad Flagship Visit & Conversion */}
        <FinalCTA onBookVisit={() => openBookModal()} />
      </main>

      <Footer onBookVisit={() => openBookModal()} />

      <BookVisitModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        preselectedExperience={modalExperience}
        preselectedClassTitle={modalClassTitle}
      />

      <TrainerApplicationModal
        isOpen={isTrainerModalOpen}
        onClose={() => setIsTrainerModalOpen(false)}
        preselectedRole={trainerRole}
      />
    </div>
  );
}
