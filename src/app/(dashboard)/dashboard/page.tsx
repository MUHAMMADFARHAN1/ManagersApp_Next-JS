import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Menu from "../../../components/menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function getChallenges() {
  const res = await fetch("http://localhost:2000/challenges");
  const posts = await res.json();

  return posts;
}

//https://nextjs.org/docs/app/guides/migrating/app-router-migration#step-6-migrating-data-fetching-methods

export default async function page() {
  const challenges = await getChallenges();
  console.log(challenges);
  return (
    <div>
      <Menu />
      <Table>
        <TableCaption>Your challenges list</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead className="text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
