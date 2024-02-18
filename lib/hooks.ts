import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  selectTimeOfLastClick,
  setActiveSection,
} from "./features/headerSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export const useSectionInview = ({
  activeSection,
  amount = 0.75,
}: {
  activeSection: string;
  amount: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });
  const dispatch = useAppDispatch();
  const timeOfLastClick = useAppSelector(selectTimeOfLastClick);
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000)
      dispatch(setActiveSection(activeSection));
  }, [isInView, dispatch, timeOfLastClick, activeSection]);

  return { ref };
};
